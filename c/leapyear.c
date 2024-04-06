#include<stdio.h>  
#include<conio.h>  
int main(){ 
    int year;
    scanf("%d",&year);
    if(year%4==0){
        printf("leap year");
    }
    else{
        printf(" %d not leap year",year);
    }
    getch();
}    

