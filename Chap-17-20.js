var numbers=[3][3];
numbers=[1,2,3];[4,5,6];[7,8,9];
document.write(numbers);

for(i=1;i<=10;i++)
{
    document.write("<br />"+i);
}

var table=+prompt('Enter The Number to have table');
for(i=1;i<=10;i++)
    {
        document.write('<br />'+table+'*'+i+'='+i*table)
    }

    var table=+prompt('Enter The Number to have table');
    var length=+prompt('Enter The length of table');
for(i=1;i<=length;i++)
    {
        document.write('<br />'+table+'*'+i+'='+i*table)
    }

    var fruits = ["apple", "banana","mango", "orange","strawberry"];
    for(i=0;i<=4;i++)
    {
        document.write("<br />"+fruits[i]);
    }
    for(i=0;i<=4;i++)
    {
        document.write("<br />Element at Index "+i+" is: "+fruits[i]);
    }
    document.write("<br />");

    for(i=1;i<=15;i++)
    {
        document.write(" "+i+" ");
    }
    document.write("<br />");

    for(i=10;i>=0;i--)
    {
        document.write(" "+i+" ");
    }
    document.write("<br />");

    for(i=0;i<=20;i++)
    {
        if(i%2===0)
        {
            document.write(" "+i+" ");
    
        }
    }
    document.write("<br />");

    for(i=0;i<=20;i++)
    {
        if(i%2!=0)
        {
            document.write(" "+i+" ");
    
        }
    }


    document.write("<br />");

    for(i=1;i<=20;i++)
    {
        if(i%2===0)
        {
            document.write(" "+i+"k ");
    
        }
    }
    

    var bakery=["cake","applepie","cookie","chips","patties"];
    var choice=prompt("welcome to ansari bakery! what do you want to order sir/ma'am:");
    for(i=0;i<=4;i++)
    {
        if(choice===bakery[i])
        {
            alert(choice+" is available at index "+i+" in our bakery");
            break;
        }
        else if(i===4)
        {
            alert("We are sorry, "+choice+" is not available in our bakery");
        }
    }


    var number=[24, 53, 78, 91, 12];
    document.write("Natural Array  "+number);
for(i=0;i<=4;i++)
{
    for(j=i+1;j<=4;j++)
    {
        if(number[i]>number[j])
        {
            var temp=number[i];
            number[i]=number[j];
            number[j]=temp;
        }
    }
    
}
document.write("<br />Largest Numbers  "+number[4]);
document.write("<br />Smallest Numbers  "+number[0]);
document.write("<br />");
for(i=1;i<=20;i++)
{
    document.write(5*i+" ");
}
