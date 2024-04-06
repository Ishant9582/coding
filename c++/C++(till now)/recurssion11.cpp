#include<iostream>
using namespace std;
void f(int num ){
    if(num<=0){
        return ;
    }
    f(num-1);
    cout<<num;
    // here num is exexuted after every fun call
}
int main(){
    int num = 5;
    f(num);
}