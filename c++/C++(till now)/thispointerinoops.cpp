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
    rectangle(){
        length = 1 ;
        breadth = 1;
    }
    rectangle(int length , int breadth){
        this->length = length ;
        this->breadth = breadth ;
    }
    rectangle(rectangle &r){
        length =  r.length ;
        breadth = r.breadth ;
    }
};
int main(){
    rectangle r1(10,5);
    
    cout<<r1.area()<<endl;

}