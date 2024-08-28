#include <stdio.h>
// Define the structure for the Student
struct Student {
    int roll_number;
    char name[50];
    float marks;
};
int main() {
    // Declare a variable of type Student
    struct Student student1;
    // Input details for the student
    printf("Enter Roll Number: ");
    scanf("%d", &student1.roll_number);
    printf("Enter Name: ");
    scanf("%s", student1.name);
    printf("Enter Marks: ");
    scanf("%f", &student1.marks);
    // Display details of the student
    printf("\nStudent Details:\n");
    printf("Roll Number: %d\n", student1.roll_number);
    printf("Name: %s\n", student1.name);
    printf("Marks: %.2f\n", student1.marks);
    return 0;
}
