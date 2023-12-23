function label_create(ele_name,attr_name_1,attr_value_2,content){
    var ele = document.createElement(ele_name);
    ele.setAttribute(attr_name_1,attr_value_2);
    ele.innerHTML = content;
    return ele;
}

function break_create(){
var br = document.createElement("br");
return br;
}

function input_create(ele_name,attr_name_1,attr_value_1,id_val_1){
    var input = document.createElement(ele_name);
     input.setAttribute(attr_name_1,attr_value_1);
     input.id = id_val_1;
     return input;

}

var first_label = label_create("label","for","firstname","firstname");
var break_1 = break_create();
var firstname = input_create("input","type","firstname","firstname");
var break_2 = break_create();

var middle_label = label_create("label","for","middlename","middlename");
var break_3 = break_create();
var middlename = input_create("input","type","middletname","middlename");
var break_4 = break_create();

var last_label = label_create("label","for","lastname","lastname");
var break_5 = break_create();
var lastname = input_create("input","type","lastname","lastname");
var break_6 = break_create();

var phone_label = label_create("label","for","phone","phonenumber");
var break_7 = break_create();
var phonenumber = input_create("input","type","phone","phonenumber");
var break_8 = break_create();

document.body.append(first_label,break_1,firstname,break_2,
    middle_label,break_3,middlename,break_4,
    last_label,break_5,lastname,break_6,
    phone_label,break_7,phonenumber,break_8);
