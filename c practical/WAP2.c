#include <stdio.h>
#include <math.h>
int main()
{
    float area, perimeter, radius;
    printf("Enter radius ");
    scanf("%f", &radius);
    area = 3.14 * pow(radius, 2);
    printf("area of circle is : %f\n", area);
    perimeter = 2 * 3.14 * radius;
    printf("perimeterof circle is : %f\n", perimeter);
    float a, b;
    printf("enter a :");
    scanf("%f", &a);
    printf("enter b :");
    scanf("%f", &b);
    perimeter = 2 * (a + b);
    printf(" perimeter of rectangle is %f\n", perimeter);
    area = a * b;
    printf("area of rectangle is %f\n", area);
    return 0;
}