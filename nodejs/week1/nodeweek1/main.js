class Person {

    Constructor(name, age){
        this.name = name;
        this.age = age
    }

    birthday(){
        return ('wishing ' + this.name + ' a happy '+ (this.age +1)+ ' birthday')
    }

    addPhone(phoneNum){
        this.phoneNum = phoneNum;
    }

    call(){
        
        if(this.phoneNum){
            return ('Calling ' + this.name + ' at ' + this.phoneNum)
        }
        else{
            return ('This number is not correct. Enter a valid number and try agin!')
        }
    }
	// your code here
};

// remember to write a constructor function
let jimmy = new Person("Jimmy", 28);

jimmy.addPhone("55551234");

jimmy.call();
console.log(jimmy.call())
// should say "Calling Jimmy at 55551234..."

jimmy.birthday();

console.log(jimmy.birthday())
// should say "Wishing Jimmy a happy 29th birthday!"

let jill = new Person("Jill");

jill.call();
console.log(jill.call())
// should say "Jill has no phone number saved."

