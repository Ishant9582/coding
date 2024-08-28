#include<stdio.h>
int main(){
    int n ;
    printf("enter value of n:");
    scanf("%d",&n);
    int ans =1;
    for(int i=1 ; i<=n ;i++){
        ans = ans*i;
    }
    printf("factorial of n is %d",ans);
}