'use strict';

import Mellowtel from "mellowtel";


async function init() {

    const mellowtel = new Mellowtel("34c8c438");

    console.log(mellowtel.MAX_DAILY_RATE);

    await mellowtel.initContentScript();

}

// init()
