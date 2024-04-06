#include<iostream>
using namespace std;
class rational{
    private:
    int p ;
    int q ;
    public:
    rational(){
        p=1;
        q=1;
    }
    rational(int r , int s){
        p = r ;
        q = s ;
    }
    rational(rational &r){
        p = r.p ;
        q = r.q ;
    }
    rational operator+(rational r){
        rational t ;
        t.p =  p*(r.q) + q*(r.p) ;
        t.q =  q*(r.q) ;
        return t ;
    }
    friend ostream &operator<<(ostream &s , rational &r) ;
} ;
 ostream &operator<<(ostream &s , rational &r){
        s<<r.p<<"/"<<r.q ;
        return s ;
    }
int main(){
    rational r(1,1) , r1(2,2) ,r3 ;
    r3 = r+r1 ;
    cout<<r3 ; 
}