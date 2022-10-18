Cypress.Commands.add('repeatAction', (key, times, delay = 0) => {
  for (let i = 0; i < times; i++) {
    cy.action(key);
    if (delay) {
      cy.wait(delay);
    }
  }
});

Cypress.Commands.add('action', key => {
  const keyMap = {
    DOWN: '{downarrow}',
    LEFT: '{leftarrow}',
    RIGHT: '{rightarrow}',
    UP: '{uparrow}',
    NUM_0: '0',
    NUM_1: '1',
    NUM_2: '2',
    NUM_3: '3',
    NUM_4: '4',
    NUM_5: '5',
    NUM_6: '6',
    NUM_7: '7',
    NUM_8: '8',
    NUM_9: '9',
    PAGE_DOWN: '{pagedown}',
    PAGE_UP: '{pageup}',
    PAUSE: '{ctrl}{pause}',
    ENTER: '{enter}',
    BACK: '{backspace}'
  };
  const splKey = {
    INPUT: { keyCode: 121, which: 121, force: true },
    APP1: { keyCode: 115, which: 115, force: true },
    APP2: { keyCode: 116, which: 116, force: true },
    APP3: { keyCode: 117, which: 117, force: true },
    POWER: { keyCode: 122, which: 122, force: true }
  };
  if (key in keyMap) {
    cy.get('body').type(keyMap[key], { force: true });
  } else if (key in splKey) {
    cy.get('body').trigger('keydown', splKey[key]);
  } else {
    cy.get('body').type(key, { force: true });
  }
});
