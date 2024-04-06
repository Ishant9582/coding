#include<iostream>
using namespace std;
int main(){
    int a,b;
    cin>>a>>b;
    int result=a;
    for(int i=2;i<=b;i++){
        result*=a;

    }
    cout<<result;
}