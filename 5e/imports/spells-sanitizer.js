import {condensedXge } from './spells/spells-condensed-xge'


let getDuration = function(d) {
    let duration = d.duration
        ? d.duration.amount + ' ' + (d.duration.type + (+d.duration.amount > 1 ? 's' : ''))
        : d.type
    if(duration == 'instant'){ duration = 'instantaneous'}
    return duration[0].toUpperCase() + duration.substr(1);
}

let getRange = function(r) { 
    if(!r.distance) { return "Special"; }
    if(r.distance.amount && r.distance.type) {
        if(r.type == 'point') { return r.distance.amount + ' ' + r.distance.type; }
        if(r.type == 'sphere') { return 'Self (' + r.distance.amount + '-' + r.distance.type + '-radius sphere)' }
        return 'Self (' + r.distance.amount + '-' + r.distance.type + ' ' + r.type + ')';
    }
    if(r.type == 'point') {
        return r.distance.type[0].toUpperCase() + r.distance.type.substr(1);
    }   
    throw new Error('Range not acccounted for');
}

let getCastTime = function(t) { 
    let time = t.number + ' ' + t.unit
    if(+t.number > 1) { time = time + 's' }
    return time;
}

let sanitizeVariables = function(str) { 
    if(str.includes('@')){
        let mm = /\{@([a-z]+) ([^\}]+)\}/.exec(str);
        //if(!mm) { console.log('eh', str)}
        if(mm) {
        
            let strb = str.replace(/\{@([a-z]+) ([^\}]+)\}/g, '$2')

            //if(strb.includes('@')) console.log('eh', strb) 
            //if(strb.includes('|')) { console.log('ah', strb)}

            return strb;
        } 
    }
    return str;
}

let getDescription = function(entries) {
    entries = entries.map(entry => {
        if(typeof(entry) == "string"){ return sanitizeVariables(entry); }
        if(entry.name && entry.entries) {
            return "<strong>" + entry.name + "</strong> " + sanitizeVariables(entry.entries[0]);    
        }
        if(entry.type == "list") {
            return entry.items.map(m => sanitizeVariables(m)).join('<br>')
        }
        if(entry.type == 'table') { 
            // ehhhhh
            return "";
        } 
    });
    
    return entries.join('<br>');
}


let fuckyou = condensedXge.map(s => {
    delete s.srd;
    delete s.classes;
    delete s.backgrounds;
    delete s.damageInflict
    delete s.areaTags;
    delete s.miscTags;
    delete s.src;
    delete s.page;
    delete s.savingThrow;
    delete s.source;
    delete s.conditionInflict;
    delete s.scalingLevelDice;
    delete s.races;
    delete s.otherSources;
    delete s.spellAttack;
    let m = s.components.m;
    s.components = Object.keys(s.components).map(k => k.toUpperCase()).join(',')
    if(m) { 
        s.components = s.components + ' (' + m.text ? m.text : m + ')';
    }

    if(s.duration.length > 1) console.log('!', s.duration)
    s.duration = getDuration(s.duration[0]);

    s.school = {
        A : "Abjuration",
        C : "Conjuration",
        E : "Enchantment",
        D : "Divination",
        I : "Illusion",
        N : "Necromancy",
        T : "Transmutation",
        V : "Evocation"
    }[s.school]

    s.range = getRange(s.range);

    s.castTime = getCastTime(s.time[0]);
    delete s.time;

    if(s.entriesHigherLevel) { s.entries = s.entries.concat(s.entriesHigherLevel)}
    s.description = getDescription(s.entries);
    delete s.entries;
    delete s.entriesHigherLevel;
   
    return s;
});
console.log(fuckyou)

document.write(JSON.stringify(fuckyou, 0, 2))