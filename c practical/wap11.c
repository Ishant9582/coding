#include <stdio.h>
void swap(int, int);
void main(){
    int num1 = 55;
    int num2 = 34;
    printf("Before swapping: num1 = %d, num2 = %d\n", num1, num2);
    swap(num1, num2);
}
void swap(int num1, int num2){
    int t;
    t = num1;
    num1 = num2;
    num2 = t;
    printf(" Values after being swapped num1 = %d, num2 = %d\n", num1, num2);
}