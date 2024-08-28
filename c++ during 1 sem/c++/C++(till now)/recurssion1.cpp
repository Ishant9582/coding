#include<iostream>
using namespace std;
int fact(int n){
    if(n==1){
        return 1;
    }
    else{
        int ans = n*fact(n-1);
        return ans;
    }
}
int main(){
    int a=5;
    int b = fact(5);

    cout<<b;
}