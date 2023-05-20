var VStep1;// A variable for future validator
var step1 = function () {
    this.preDispatch = function(){

        //Making a call to LateX to generate an image of formula
        step1_latex = null;
        step1_latex = new LateX();
        step1_latex.setFormula("Fe^3^++3Cl^- \\rightarrow");
    };

    this.postDispatch = function () {
        VStep1 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep1.addValidator($('input[name="step1-input"]'), 1) 
            .addValidator($('input[name="step1-radio1"]'), 'third')
            .addValidator($('input[name="step1-radio2"]'), 'fourth')// Either 4.5 and 4,5 will be correct
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers
        

        $('.page1 button.check').click(function () {
            VStep1.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep1.validate(); // validate the validators
        });

    };

    this.mustache = function () {
        return {
            STEP1_INPUT: new TextInput('step1-input')
                .render(),
            STEP1_RADIO1: new Radios('step1-radio1')
            .addRadio('{{STEP1_RADIO1_VAR1}}', 'first')
            .addRadio('{{STEP1_RADIO1_VAR2}}', 'second')
            .addRadio('{{STEP1_RADIO1_VAR3}}', 'third')
            .addRadio('{{STEP1_RADIO1_VAR4}}', 'fourth')
            .render(),
            STEP1_RADIO2: new Radios('step1-radio2')
            .addRadio('{{STEP1_RADIO2_VAR1}}', 'first')
            .addRadio('{{STEP1_RADIO2_VAR2}}', 'second')
            .addRadio('{{STEP1_RADIO2_VAR3}}', 'third')
            .addRadio('{{STEP1_RADIO2_VAR4}}', 'fourth')
            .render(),
            STEP1_LATEX1: step1_latex != null ? step1_latex.render() : ""
        }
    }
};