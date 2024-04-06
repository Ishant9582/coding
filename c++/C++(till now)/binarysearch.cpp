#include<iostream>
#include<vector>
using namespace std;
int binary(vector<int>&v,int target){
    int f = 0;
    int l = v.size()-1;
 
    while(f<=l){
        int mid = (l+f)/2 ;
        
        if(v[mid]==target) return mid;
        else if(v[mid]<target){
            f = mid+1 ;
        }
        else{
            l = mid-1;
        }
    }
    return -1 ;
}
int main(){
    vector<int>v{1,2,3,4,5,6,7,8,9};
    int target = 6;
    int a = binary(v,target);
    cout<<a;
}