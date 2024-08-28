#include<iostream>
using namespace std ;
class rectangle{
    //private :
    int length ;
    int breadth ;
    public:
    void setlength(int l){
        if (l>=0){
            length = l ;
        }
        else length = 0; 
    }
     void setbreadth(int b){
        if (b>=0){
            breadth = b ;
        }
        else breadth = 0; 
    }
    int area(){
        return length*breadth ;
    }
    int getlength(){
        return length ;
    }
};
int main(){
    rectangle r ;
    r.setlength(4);
    r.setbreadth(4);
    cout<<r.area()<<" "<<r.getlength() ;
}