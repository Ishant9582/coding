#include<stdio.h>

int main() {
    int choice, a, b, sum, multiply, subtract, modulus;

    printf("Enter num a: ");
    scanf("%d", &a);

    printf("Enter num b: ");
    scanf("%d", &b);

    printf("Enter choice: ");
    scanf("%d", &choice);

    switch (choice) {

        case 1:
                sum = a + b ;
               printf("Your ans is : %d\n" ,sum);
               //break;

        case 2:
                multiply = a*b ;
               printf("Your ans is : %d\n" ,multiply);
               //break;

        case 3:
                subtract = a - b ;
               printf("Your ans is : %d\n" ,subtract);
              // break;    

        case 4:
                modulus = a % b ;
               printf("Your ans is : %d\n" ,modulus);
               //break;   

        default :
               printf("Invalid choice \n");
    }
    return 0;
}
