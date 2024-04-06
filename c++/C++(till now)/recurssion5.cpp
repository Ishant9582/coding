#include<iostream>
using namespace std;
int h(int a , int b){
    if(b==0){
        return 1;
    }
    if(b%2==0){
        int ans = h(a,b/2);
        return ans*ans;
    }
    else{
    int ans = h(a,b-1/2);
    return a*ans*ans;
    }
}
int main(){
    int a=2;
    int b=3;
    int ans = h(a,b);
    cout<<ans;
}