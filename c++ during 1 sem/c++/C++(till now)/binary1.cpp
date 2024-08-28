#include<iostream>
#include<vector>
using namespace std;
int binary(vector<int>&v,int target){
    int f = 0;
    int l = v.size()-1;
    int ans = -1;
    while(f<=l){
        int mid = f + (l-f)/2 ;
        
        if(v[mid]==target){
            ans = mid;
            l = mid-1;
        }
        else if(v[mid]<target){
            f = mid+1 ;
        }
        else{
            l = mid-1;
        }
    }
    return ans ;
}
int main(){
    vector<int>v{1,2,5,5,5,5,6,7,8,9};
    int target = 5;
    int a = binary(v,target);
    cout<<a;
}