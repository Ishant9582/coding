#include<iostream>
using namespace std;
int add(int num1,int num2);
int main(){
    int sum=add(2,3);
    cout<<sum;
}
int add(int num1 , int num2){

    int sum=num1+num2;
    return sum;
}