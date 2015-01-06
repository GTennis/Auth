/**
 * Created by gytenis on 1/4/15.
 */

interface IParsable {

    // Every object clas should implement generic method for creating json string from itself
    json () : string;

    // Every object class should implement generic contructor for creating object from json string
    //constructor(json : string);
    //new (json : string);
}

export = IParsable;