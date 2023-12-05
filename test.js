const riskConverting = require('./index');
test ('one key word to equal 1', ()=>{
    const key_words = [];
    const input = "My car crash";
    key_words.push('crash');
    const expected = 1;
    const actual = key_words.length;
    expect (actual).toBe(expected);
});
test ('Two key word to have risk rating value of 2', ()=>{
    const key_words = [];
    const input = "My car crash and collide";
    key_words.push('crash');
    key_words.push('collide');
    const expected = 2;
    const actual = key_words.length;
    expect (actual).toBe(expected);
});
test ('Three key word to have risk rating value of 3', ()=>{
    const key_words = [];
    const input = "My car crashes, bumbs and collide";
    key_words.push('crashes');
    key_words.push('collide');
    key_words.push('bumps');
    const expected = 3;
    const actual = key_words.length;
    expect (actual).toBe(expected);
});
test ('Four key word to have risk rating value of 4', ()=>{
    const key_words = [];
    const input = "My car crashes, smashes, bumbs and collide";
    key_words.push('crashes');
    key_words.push('collide');
    key_words.push('bumps');
    key_words.push('smashes')
    const expected = 4;
    const actual = key_words.length;
    expect (actual).toBe(expected);
});
test ('Five key word to have risk rating value of 5', ()=>{
    const key_words = [];
    const input = "My car crashes, smashes, bumbs, scratched and collide";
    key_words.push('crashes');
    key_words.push('collide');
    key_words.push('bumps');
    key_words.push('smashes');
    key_words.push('scratched');
    const expected = 5;
    const actual = key_words.length;
    expect (actual).toBe(expected);
});
test ('No key word to have risk rating value of 0', ()=>{
    const key_words = [];
    const input = "My car is running well.";
    
    
    const expected = 0;
    const actual = key_words.length;
    expect (actual).toBe(expected);
});
