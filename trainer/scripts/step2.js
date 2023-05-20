var VStep2;// A variable for future validator
var step2 = function () {
    this.preDispatch = function () {
        step2_latex = null;
        step2_latex = new LateX();
        step2_latex.setFormula("V_1*C_1=V_2*C_2");
    };

    this.postDispatch = function () {
        VStep2 = new Validator();
        //first param - DOM object, second - correct value or array of values, third - if there are multiple correct answers
        //fourth - if you need to have 2 answers at the same time to be entered
        VStep2.addValidator($('div.droppable[name="step2-droppable"]'), ['one', 'three', 'five'], false, true)
            .addValidator($('input[name="step2-checkbox1"]'), false)
            .addValidator($('input[name="step2-checkbox2"]'), false)
            .addValidator($('input[name="step2-checkbox3"]'), true)
            .addValidator($('input[name="step2-checkbox4"]'), false)
            .addValidator($('input[name="step2-checkbox5"]'), false)
            .addValidator($('input[name="step2-checkbox6"]'), true)
            .addValidator($('input[name="step2-checkbox7"]'), true)
            .addValidator($('input[name="step2-checkbox8"]'), true)
            .setStrictMode(true) // Restrict number of attempts to 3 (default)
            .setIgnoreCase(false) // Ignore letter case (eg. TEXT, text)
            .enableStepFinishAlert(true); // Enable showing alert after step is done
            //.disableAnswersBacklight(true); //-- Disable green/red color of correct/incorrect answers

        $('.page2 button.check').click(function () {
            VStep2.setAttemptsOnCheckButton($(this)); //dynamically changing amount of attempts left on check button
            VStep2.validate(); // validate the validators
        });
    };

    this.mustache = function () {
        return {
            STEP2_DROPPABLE: new DroppableArea('step2-droppable')
                .addClass('input')
                .render(),


            STEP2_DRAGGABLE: new DraggableGroup('step2-draggable')
                .addClass('value')
                .addOption('Pb^2^+', 'one')
                .addOption('K^+', 'two')
                .addOption('Hg^+', 'three')
                .addOption('Al^3^+', 'thour')
                .addOption('Cr^3^+', 'five')
                .render(),
            BOX_S2_1: new CheckBox('step2-checkbox1')
                .setValue("ch1")
                .setLabel('{{{CHECKBOX_STEP2_1}}}')
                .render(),
            BOX_S2_2: new CheckBox('step2-checkbox2')
                .setValue("ch2")
                .setLabel('{{{CHECKBOX_STEP2_2}}}')
                .render(),
            BOX_S2_3: new CheckBox('step2-checkbox3')
                .setValue("ch3")
                .setLabel('{{{CHECKBOX_STEP2_3}}}')
                .render(),
            BOX_S2_4: new CheckBox('step2-checkbox4')
                .setValue("ch4")
                .setLabel('{{{CHECKBOX_STEP2_4}}}')
                .render(),
            BOX_S2_5: new CheckBox('step2-checkbox5')
                .setValue("ch5")
                .setLabel('{{{CHECKBOX_STEP2_5}}}')
                .render(),
            BOX_S2_6: new CheckBox('step2-checkbox6')
                .setValue("ch6")
                .setLabel('{{{CHECKBOX_STEP2_6}}}')
                .render(),
            BOX_S2_7: new CheckBox('step2-checkbox7')
                .setValue("ch7")
                .setLabel('{{{CHECKBOX_STEP2_7}}}')
                .render(),
            BOX_S2_8: new CheckBox('step2-checkbox8')
                .setValue("ch8")
                .setLabel('{{{CHECKBOX_STEP2_8}}}')
                .render(),

            STEP2_LATEX: step2_latex != null ? step2_latex.render() : ""

            //STEP2_LATEX: step2_latex != null ? step2_latex.render() : "",
        }
    }
};

