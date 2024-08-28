#include <stdio.h>

int main()
{
    int num, r = 0;
    printf("enter a num u want to check");
    scanf("%d", &num);
    int a = num ;
    while (num != 0)
    {
        int rem = num % 10;
        r = r * 10 + rem;
        num = num / 10;
    }
    printf("%d",a) ;
    if(a == r)
    {
        printf("its a palindrome no");
    }
    else
    {
        printf("its not a palindrome");
    }
}