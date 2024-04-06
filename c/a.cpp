#include <iostream>
using namespace std;


    

int main() {
    
    int N = 5;
    int arr[N] = {1, 2, 3, 4, 5};
    int temp = arr[N - 1];
    for (int i = N - 1; i > 0; --i) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp; 
    for (int i = 0; i < N; ++i) {

        cout<< arr[i] << " ";
    }

}
include <iostream>

void rotateArray(int arr[], int N) {

    int temp = arr[N - 1];

    for (int i = N - 1; i > 0; --i) {
        arr[i] = arr[i - 1];
    }

    arr[0] = temp;
}

int main() {
    // Example usage
    const int N = 5;
    int array[N] = {1, 2, 3, 4, 5};

    // Rotate the array
    rotateArray(array, N);

    // Display the rotated array
    for (int i = 0; i < N; ++i) {
        std::cout << array[i] << " ";
    }

    return 0;