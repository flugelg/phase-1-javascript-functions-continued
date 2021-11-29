function saturdayFun(activity) {
    if (activity != null) {
        return `This Saturday, I want to ${activity}!`;
    }

    else {
        return `This Saturday, I want to roller-skate!`;
    }
}

function mondayWork(work) {
    if (work != null) {
        return `This Monday, I will ${work}.`;
    }

    else {
        return `This Monday, I will go to the office.`;
    }
}

function wrapAdjective(flair) {
    return function (name) {
        if (name != null) {
            return `You are ${flair}${name}${flair}!`;
        }
    
        else {
            return `You are *special*`;
        }
    };
  }