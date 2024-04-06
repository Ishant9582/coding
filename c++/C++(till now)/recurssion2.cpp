#include<iostream>
using namespace std;
int fabi(int n){
    if(n==0 or n==1){
        return n;
    }
    
    else{
        int ans = fabi(n-1)+fabi(n-2);
        return ans;
    }
}
int main(){
    int a = 4
    ;
    int ans=fabi(a);
    cout<<ans;
}
//value of 4 fabinocci is 3 