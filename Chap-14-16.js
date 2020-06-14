 var students=[];
 var strings=["ali","fatima","mudasir"];
 var numbers=[1,2,3,4,5,6];
 var boleans=[true,false];
 var mixed=["ali",1,2,true,"fatima"];


 var education=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M","Phil", "PhD"];
 document.write("Qualifications<br />");
 for (i=0;i<=8;i++)
 {
     document.write("<br />"+(i+1)+") "+education[i]);
 }

 var subject=[];
var mark=[];
var obtain=+0;
var grade=+0;
var remarks;
for(i=1;i<=3;i++)
{
    subject[i]=prompt("enter subject "+i);
    mark[i]=+prompt("enter marks "+i);
    obtain=obtain+mark[i];

}
var total=+300;
var percentage=((obtain/total)*100);
if (percentage>=80)
{
    grade="A+"
    remarks="Excellent.";
}
else if (percentage<80 && percentage>=70)
{
    grade="A";
    remarks="Well Done.";
}
else if (percentage<70 && percentage>=60)
{
    grade="B";
    remarks="Good.";
}
else if (percentage<60)
{
    grade="fail";
    remarks="Need Much Improvment.";
}

document.write("<br />Total Marks: "+total);
document.write("<br />Obtain Marks: "+obtain);
document.write("<br />Passing Percentage: "+percentage);
document.write("<br />Grade: "+grade);
document.write("<br />Remarks: "+remarks);


var colours=["red","blue","green","purple","orange"];
document.write("<br />"+colours);
var choice=prompt("which colour you want to add at start of colours array");
colours.unshift(choice);
document.write("<br />"+colours);
var choice=prompt("which colour you want to add at end of colours array");
colours.push(choice);
document.write("<br />"+colours);
colours.unshift("seagreen","brown");
document.write("<br />"+colours);
colours.shift();
document.write("<br />"+colours);
colours.pop();
document.write("<br />"+colours);


var position=+prompt("which place you want to add new colour 0,1,2,3,4 ");
var choice2=prompt("Colour name");
colours.splice(position,0,choice2);
document.write("<br />"+colours);

var position2=+prompt("which place you want to remove colour 0,1,2,3,4 ");
var num=+prompt("How many colours");
colours.splice(position2,num);
document.write("<br />"+colours);


var marks=[120,342,61,234,23,542];
document.write("Natural Array  "+marks);
for(i=0;i<=5;i++)
{
    for(j=i+1;j<=5;j++)
    {
        if(marks[i]>marks[j])
        {
            var temp=marks[i];
            marks[i]=marks[j];
            marks[j]=temp;
        }
    }
    
}
document.write("<br />Sorted Array  "+marks);


var cities=["karachi","kashmir","islamabad","peshawar","lahore"];
document.write("<br />"+cities);
var selectedcities=[];
selectedcities=cities.slice(2,4);
document.write("<br />"+selectedcities);

var devices=[];
devices[0]="keyboard";
devices[1]="mouse";
devices[2]="pinter";
devices[3]="monitor";
for(i=0;i<=3;i++)
{
    document.write("<br />out:<br />"+devices[i]);
}


var manufecturers=["Apple","Samsung", "Motorola", "Nokia", "Sony","Haier"];
for(i=0;i<=5;i++)
{
    document.write("<br />"+manufecturers[i]);
}