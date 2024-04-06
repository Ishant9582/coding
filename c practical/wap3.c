#include<stdio.h>
int main (){
// This is of autoconversion of data type 
    int a ; 
    printf("enter value of a:");
    scanf("%d",&a);
    float b = a ; 
    printf("The user data type is : %f \n ", b );
 //This is for explicit  data conversion
    float c  ;
    printf("enter value of c:");
    scanf("%f",&c);
    int d = (int)c ; 
    printf("The user data type is : %d" , d);
    return 0 ;
}