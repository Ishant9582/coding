#include<iostream>
using namespace std ;
class rectangle{
    int length ;
    int breadth ;
    public :
    void setlength(int l){
        length = l ;
    }
    void setbreadth(int b){
        breadth = b ;
    }
    int getlength(){ return length;} 
    int getbreadth(){return breadth;}
    int area(){
        return length*breadth ;
    }
} ;
class cuboid : public rectangle{
    int height ;
    public:
    cuboid(int l=0 , int b = 0 , int h =0){
        setlength(l);
        setbreadth(b);
        height = h ;
    }
    int volume(){
        return getlength()*getbreadth()*height ;
    }

};
int main(){
    cuboid r(2,2,2) ;
    cout<<r.volume()<<endl ;

}