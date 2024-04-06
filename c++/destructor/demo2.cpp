#include<iostream>
using namespace std;
class demo{
    public:
    demo (){
        cout<<"constructor"<<endl ;
    }
    ~demo(){
        cout<<"destroyeed"<<endl;
    }
};
void fun(){
    demo *p = new demo() ;
    delete p ;                               // need to write this as agr ye nhi likha to destroy vala delete nhi hoga
}
int main(){
    fun();
}