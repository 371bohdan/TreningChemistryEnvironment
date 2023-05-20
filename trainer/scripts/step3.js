var VStep3;// A variable for future validator
var step3 = function () {
    this.preDispatch = function () {
        
    };

    this.postDispatch = function () {
        VStep3 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep3.addValidator($('input[name="step3-input1"]'), ['3,011', '3.011', '3,01', '3.01', '3'])
        .addValidator($('input[name="step3-input2"]'), ['5,12', '5.12', '5,1', '5.1', '5'])
        .addValidator($('input[name="step3-input3"]'), ['0,704', '0.704', '0,7', '0.7'])
        .setStrictMode(true) // Restrict number of attempts to 3 (default)
        .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
        .enableStepFinishAlert(true); // Enable showing alert after step is done
        //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers


        $('.page3 button.check').click(function () {
            VStep3.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep3.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP3_INPUT1: new TextInput('step3-input1')
                .render(),
            STEP3_INPUT2: new TextInput('step3-input2')
                .render(),
            STEP3_INPUT3: new TextInput('step3-input3')
                .render()
                //.randomize() -- You can randomize select choice elements
        }
    }
};