#include<iostream>
#include<vector>
using namespace std;
void spiralorder(vector<vector<int>>&matrix){
    int left=0;
    int right=matrix[0].size()-1;
    int top=0;
    int bottom=matrix.size()-1;
    int direction=0;
    int value=1;
    while(top<=bottom && top<=bottom){
        if (direction==0){
            for(int col=left;col<=right;col++){
                matrix[top][col]=value++;
            }
            top++;
        }
        //top to bottom
        else if(direction==1){
            for(int row=top;row<=bottom;row++){
                matrix[row][right]=value++;
            }
            right--;
        }
        //right to left
        else if(direction==2){
            for(int col=right;col>=left;col--){
                matrix[bottom][col]=value++;
            }
            bottom--;
        }
        //bottom to top
        else{
            for(int row=bottom;row>=top;row--){
                matrix[row][left]=value++;
            }
            left++;
        }
        direction=(direction+1)%4;
    }
}
int main(){
    int n;
    cin>>n;
    vector<vector<int>>matrix(n,vector<int>(n));
    
    
    spiralorder(matrix);
}