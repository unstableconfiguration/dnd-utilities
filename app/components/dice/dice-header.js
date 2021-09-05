import { lite } from 'lite';

export let vm = lite.extend({
    content : `
        <div class='form-group'>
            <label class='form-group-label label-small'>
                <span class='icon'>
                    <i class="fas fa-dice-d20"></i>
                </span>
            </label>
            <input class='form-group-input input-small' type='text' placeholder='1d6'>
            </input>
            <label id='dice-output' class='form-group-label label-small'>
                output
            </label>
        </div>
    `
});
export let dice = vm;