#include<iostream>
using namespace std;
int h(int a , int b){
    if(b==0){
        return 1;
    }
    int ans = a*h(a,b-1);
    return ans;
}
int main(){
    int a=2;
    int b=3;
    int ans = h(a,b);
    cout<<ans;
}