#include<iostream>
using namespace std;
int sumofdigits(int b){
    if(b>=0 && b<=9){
        return b;
    }
    int ans = b%10 + sumofdigits( b/10);
    return ans;
}
int main(){
    int a=125;
    int ans=sumofdigits(a);
    cout<<ans<<" ";
}