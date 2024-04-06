#include<iostream>
using namespace std ;
class demo{
    public:
    demo(){
        cout<<"created"<<endl;
    }
    ~demo(){
        cout<<"destroyed"<<endl ;
    }
};
void fun(){
    demo d ;
}
int main(){
    fun() ;
}