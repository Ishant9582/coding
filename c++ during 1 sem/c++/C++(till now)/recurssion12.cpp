#include<iostream>
using namespace std;
void f(int num, int k){
    if(num<=0){
        return ;
    }
    f(num,k-1);
    cout<<(num * k)<<" ";
    //cout<<a<<" ";
    // here num is exexuted after every fun call
}
int main(){
    //int num = 5;
    //int k =4;
    f(5,4);
}