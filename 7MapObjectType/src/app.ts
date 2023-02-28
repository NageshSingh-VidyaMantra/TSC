// Mapped types build on the syntax for index signatures,
// which are used to declare the types of properties which have not been
// declared ahead of time:

// A mapped type is a generic type which uses a union of PropertyKeys
// (frequently created via a keyof) to iterate through keys to create a type:

// Keep in mind that a mapped object type is a distinct type operator -
// that syntax in the braces can't be used in interfaces, or object types with other members. 

(() => {
  console.log("Mapped Types TypeScript");

  type Record<T extends string | number> = {
    [key in T]: string;
  };

  type AdminRecord<T extends string | number> = {
    readonly [key in T]: string | number;
  };

  let record: Record<string>;
  let admin: AdminRecord<string>;

  record = {
    en: "England",
    hi: "India",
    fr: "France",
    1: "One",
    2: "Two",
  };

  admin = {
    adminId : 123,
    adminName: 'Gagan'
  }

  console.log(record['en']);
  console.log(record[1]);
  console.log(admin);
})();
