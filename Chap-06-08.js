var name = prompt('Please Enter your name');
alert('Hello '+name);

var a=+prompt('Enter the value of a:');
document.write('Value of a is:'+a);

++a;
document.write("<br /><br />The Value of after ++a is:  "+a);
document.write("<br />Now the Value of a is:  "+a);
a++;
document.write("<br /><br />The Value of after a++ is:  "+a);
document.write("<br />Now the Value of a is:  "+a);

--a;
document.write("<br /><br />The Value of after --a is:  "+a);
document.write("<br />Now the Value of a is:  "+a);

a--;
document.write("<br /><br />The Value of after a-- is:  "+a);
document.write("<br />Now the Value of a is:  "+a);


var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write('<br /><br />a is :value of result after --a - --b + ++b + b-- = '+result);
document.write('<br />value of result after 1 - 0 + 1 + 1 = '+result);

var table=+prompt('Enter The Number to have table');
if (table===5 || table==undefined)
{
    for(j=1;j<=10;j++)
    {
        document.write('<br />5*'+j+'='+(j*5))
    }
    
}
else{
    for(i=1;i<=10;i++)
    {
        document.write('<br />'+table+'*'+i+'='+i*table)
    }
}


for(i=0;i<=2;i++);
{
    subject[i]=prompt('Enter Subject '+(i+1));
    for(j=0;j<=2;j++);
    {
        marks[j]=prompt('Enter Obtained Marks of Subject'+(j+1));
    }
}
document.write('<br />Subject\tTotal Marks\tObtained Marks\tPercentage')
for(i=0;i<=2;i++);
{
    document.write('<br />'+subject[i]+"\t100\t"+marks[i]+'\t'+marks[i]+'%');
}