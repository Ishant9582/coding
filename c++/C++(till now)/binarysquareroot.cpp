#include<iostream>
using namespace std;
int sqrt(int x){
    int f = 1;
    int l = x ;
    int ans = -1;
    while(f<=l){
        int mid = f + (l-f)/2 ;
        if(mid*mid<=x){
            //
            ans = mid;
            f = mid +1;
        }
        else{
            l = mid-1;
        }

    }
    return ans;
   
}
int main(){
    cout<<sqrt(67);

}