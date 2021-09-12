import { monsterManual as condenseda } from './monsters/monster-manual'
import { volos as condensedb } from './monsters/volos-guide-to-monsters'
import { mordenkainens as condensedc } from './monsters/mordenkainens-tome-of-foes'

import { curseOfStrahd as condensed } from './monsters/curse-of-strahd'


let getAlignment = function(alignment) { 
    if(alignment[0].chance) {
        alignment = alignment.map(a => {
            return [a.chance + '%'].concat(a.alignment);
        });
    }

    alignment = alignment.map(e => { 
        let v = {
            A : 'Any',
            C : 'Chaotic',
            E : 'Evil',
            G : 'Good',
            L : 'Lawful',
            N : 'Neutral',
            NX: 'Any Non-Good',
            NY: 'Any Non-Lawful',
            U : 'Unaligned',
        }[e];
        return v || e;
    });
    return alignment.join(" ")
}

let getAC = function(ac, m) { 
    if(!isNaN(ac[0]) ) return ac[0];
    if(!ac[0].from) return ac[0].ac;
    let from = ac[0].from.join(', ');
    from = from.replace(/\{@item ([^|]+)\|.+\}/, '$1')
    if(ac[0].ac && ac[0].from) return ac[0].ac + ' ' + from;
}

// copy: 
// monstaer has _copy property 
// expectation is: 
    // 1. import that monster stat block 
    // 2. overwrite its properties with properties explicitly contained in the new monster
    // 3. look for _copy._mod object
        // _copy._mod[*] : replace text 
        // _copy._mod.[trait || action || reaction || ]: either replace or append trait
            // copy._mod

let findMonster = function(name) { 
    let found = condenseda.find(i => i.name == name);
    if(!found) found = condensedb.find(i => i.name == name);
    if(!found) found = condensedc.find(i => i.name == name);
    if(!found) found = condensed.find(i => i.name == name);
    return found;
}

            
let copyMonster = function(monsterData) { 
    // get shallow copy of legacy monster
    let monster = findMonster(monsterData._copy.name);
    monster = JSON.parse(JSON.stringify(monster));
    // nested fucking copies
    if(monster._copy) monster = copyMonster(monster);    
    // overwrite explicitly overloaded fields
    for(let k in monsterData) {
        monster[k] = monsterData[k];
    }
    if(monster._copy._mod) {
        let replace = monster._copy._mod['*'];
        if(replace) {
            monster = JSON.stringify(monster);
            monster = monster.replace(replace.replace, replace.with);
            monster = JSON.parse(monster);
        }

        let trait = monster._copy._mod.trait;
        if(trait) {
            if(!monster.trait) monster.trait = [];
            // if replacing, get rid of the old. 
            if(trait.mode == 'replaceArr') {
                monster.trait = monster.trait.filter(r => { 
                    return r.name !== trait.replace;
                });
            }
            // append the new
            monster.trait = monster.trait.concat(trait.items);

        }

        
        let actions = monster._copy._mod.action;
        if(actions && !Array.isArray(actions)) { actions = [actions] }
        if(actions) {
            actions.forEach(action => {
                if(action.mode == 'replaceArr') {
                    monster.action = monster.action.filter(r => { 
                        return r.name !== action.replace;
                    });
                }
                if(action.items)
                monster.action = monster.action.concat(action.items);
            });
        }

        let resist = monster._copy._mod.resist;
        if(resist) { 
            // ahhhhh
            monster.resist = monster.resist.filter(r => { 
                return r != 'cold'
            })
        }
        
    }
    delete monster._copy;
    return monster;
}



let getKvP = function(actions, m) { 
    if(!actions) return undefined;
    if(actions[0].entries.length != 1) { 
        actions[0].entries = [actions[0].entries.join('&lt;br&gt;')]
    }

    return actions.map(a => { 
        let name = a.name;
        name = name.replace('{@recharge}', '(Recharge 6)')
        name = name.replace(/\{@recharge (\d)\}/g, '(Recharge ' + '$1' + '-6)')
        

        let text = a.entries[0];
        text = text.replace('{@atk mw}', 'Melee Weapon');
        text = text.replace('{@atk rw}', 'Ranged Weapon');
        text = text.replace('{@atk rs}', 'Ranged Spell'); 
        text = text.replace('{@atk ms}', 'Melee Spell');
        text = text.replace('{@atk mw,rw}', 'Melee or Ranged Weapon')
        text = text.replace('{@h}', 'Hit:')
        text = text.replace('{@recharge}', '(Recharge 6)')
        text = text.replace(/\{@recharge (\d)\}/g, '(Recharge ' + '$1' + '-6)')
        text = text.replace(/\{@[a-z]+ ([^\}]+)\}/g, '$1')
        text = text.replace(/[a-z]+\|\|([a-z]+)/g, '$1')
        text = text.replace(/[0-9]+\|[^\|]+\|(\d+%)/g, '$1')
        text = text.replace(/[0-9]+\|([0-9]+)/g, '$1')

        text = text.replace(/([a-z]+)\|(mtf|MTF)/g, '$1')
        

        if(text.includes('@') || text.includes('|')){
            //console.log(text, m);
        }

        return { 
            'Name' : name,
            'Text' : text
        }
    });
 
}

let getSpeed = function(speed) { 
    delete speed.canHover;
    return Object.keys(speed).map(k => { 
        let s = k[0].toUpperCase() + k.substr(1) + ' ';
        let v = speed[k];
        if(typeof(v) == 'object') {
            v = v.number + ' ' + v.condition;
        }
       return s + v;
    }).join(', ');
}

let getImmune = function(immune) { 
    return immune.map(i => { 
        if(typeof(i) == 'object') {
            return 'bludgeoning, piercing, slashing ' + i.note;
        }
        return i;
    }).join(', ');
}

let objToStr = function(skill) { 
    return Object.keys(skill).map(k => {
        return k[0].toUpperCase() + k.substr(1) + ' ' + skill[k];
    }).join(', ');
}


let getSpellCasting = function(spellcasting, m) {
    // spellcasting : {}
    return spellcasting.map(sc => {
        let kvp = { Name : '', Text : '' };
        kvp.Name = sc.name;
        kvp.Text = sc.headerEntries[0];// @dc @hit
        if(sc.will) kvp.Text += '&lt;br&gt;At will: &lt;em&gt;' + sc.will.join(', ') + '&lt;/em&gt;';
        if(sc.daily) {
            if(sc.daily["3"]) kvp.Text = '&lt;br&gt;3/day: &lt;em&gt;' + sc.daily["3"].join(", ") + "&lt;/em&gt;"
            if(sc.daily["3e"]) kvp.Text = '&lt;br&gt;3/day each: &lt;em&gt;' + sc.daily["3e"].join(", ") + "&lt;/em&gt;"
            
            if(sc.daily["2"]) kvp.Text = '&lt;br&gt;2/day: &lt;em&gt;' + sc.daily["2"].join(", ") + "&lt;/em&gt;"
            if(sc.daily["2e"]) kvp.Text = '&lt;br&gt;2/day each: &lt;em&gt;' + sc.daily["2e"].join(", ") + "&lt;/em&gt;"
            
            if(sc.daily["1"]) kvp.Text = '&lt;br&gt;1/day: &lt;em&gt;' + sc.daily["1"].join(", ") + "&lt;/em&gt;"
            if(sc.daily["1e"]) kvp.Text = '&lt;br&gt;1/day each: &lt;em&gt;' + sc.daily["1e"].join(", ") + "&lt;/em&gt;"
        }
        
        if(sc.spells) { 
            let levels = Object.keys(sc.spells).sort()
            levels = levels.map(l => {
                let spells = { 
                    key : l,
                    level : {
                        0 : 'Cantrips', 1 : '1st', 2 : '2nd', 3 : '3rd', 
                    }[l] || l + 'th',
                    slots : l == '0' ? '(at will)' : '(' + l + ' slots)',
                    spells : sc.spells[l].spells.join(', ')
                }

                return '&lt;br&gt;' + spells.level + ' ' + spells.slots + ': &lt;em&gt;' + spells.spells + '&lt;/em&gt;'
            });

            kvp.Text += '&lt;br&gt;' + levels.join('')
        }

        kvp.Text = kvp.Text.replace(/\{@spell ([^\}]+)\}/g, '$1');
        kvp.Text = kvp.Text.replace(/\{@dc ([^\}]+)\}/g, 'DC ' + '$1');
        kvp.Text = kvp.Text.replace(/\{@hit ([^\}]+)\}/g, '+' + '$1');
        
        return kvp;
        // spells
    });
}

let getType = function(type) { 
    if(typeof(type) == 'string') return type;
    if(typeof(type) == 'object') { 
        if(!type.tags) return type.type;
        return type.type + ' (' + type.tags.join(', ') + ')';
    }
}

let mappedcondensed = condensed.map(c => { 
    if(c._copy) { return copyMonster(c); }
    return c;
});

let altered = mappedcondensed.map(m => {
    delete m.actionTags;
    delete m.conditionInflictSpell;
    delete m.conditionInflict;
    delete m.conditionInflictLegendary;
    delete m.damageTags;
    delete m.dragonCastingColor;
    delete m.group;
    delete m.hasFluff;
    delete m.hasFluffImages;
    delete m.hasToken;
    delete m.languageTags;
    delete m.legendaryGroup;
    delete m.miscTags;
    delete m.page;
    delete m.otherSources;
    delete m.senseTags;
    delete m.soundClip;
    delete m.source;
    delete m.spellcastingTags;
    delete m.traitTags;
    delete m.srd;
    delete m.variant;

    if(!m.alignment) { console.log('eh', m); }
    m.alignment = getAlignment(m.alignment);
    if(!m.ac) console.log('no ac', m);
    m.ac = getAC(m.ac, m);
    if(m.action) m.action = getKvP(m.action, m.name);
    if(m.reaction) m.reaction = getKvP(m.reaction);
    if(m.legendary) m.legendary = getKvP(m.legendary, m.name);
    if(m.trait) m.trait = getKvP(m.trait);
    
    m.hp = m.hp.average;
    if(m.languages) m.languages =  m.languages.join(', ')
    if(m.skill) m.skill = objToStr(m.skill)
    if(m.immune) m.immune = getImmune(m.immune)
    if(m.senses) m.senses = m.senses.join(', ');
    if(m.save) m.save = objToStr(m.save);
    if(m.speed) m.speed = getSpeed(m.speed);    
    
    if(m.spellcasting) {
        let spellcasting = getSpellCasting(m.spellcasting, m);
        if(!m.trait) m.trait = [];
        m.trait = m.trait.concat(spellcasting);
        delete m.spellcasting
    }
    
    if(m.conditionImmune) m.conditionImmune = m.conditionImmune.join(', ');

    m.type = getType(m.type);

    // manually removed some ||

    return m;
});
console.log(altered)

document.write(JSON.stringify(altered, 0, 2))