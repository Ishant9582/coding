#include <stdio.h>
int main()
{
   int a,b,c ;
   printf("enter a :");
   scanf("%d",&a);
   printf("enter b :");
   scanf("%d",&b);
   printf("enter c :");
   scanf("%d",&c);
   if ((a > b) && (a > c)){
      printf("a is the greatest number ");
   }
   else if ((b > a)&&(b > c)){
      printf(" b is the greatest ");
   }
   else {
      printf("c is the greatest ");
   }
   return 0;
}