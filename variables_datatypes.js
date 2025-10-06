// 3 way to declare variables
        //var   - older - funtion-scoped
        //let   - modern - block-scoped
        //const - modern - constant --> can not reassigned


        function exampleVariable(){

            //String
            let name = "Swagat Kumar"
            const greeting = "Hellow "

            console.log(name)
            console.log(greeting)

            //Numbers
            let age = 23
            const PI = 3.14159

            console.log(age,"       ",PI)

            // Boolean
            let isStudent = true;
            const hasJob = false;
            

            //Undefined an Null
            let undefinedVar;
            let emptyValue = null;
        }

        exampleVariable();