#include <stdio.h>
int main(){
    FILE *filePointer;
    char data[100];
    // Open a file in write mode
    filePointer = fopen("hello.txt", "w");
    // Check if the file opened successfully
    if (filePointer == NULL)
    {
        printf("File failed to open.");
        return -1;
    }
    printf("Enter data to write to the file: \n");
    fgets(data, sizeof(data), stdin); // Read data from user input
    // Write data to the file
    fputs(data, filePointer);
    // Close the file
    fclose(filePointer);
    printf("Data has been written to the file.\n");
    return 0;
}