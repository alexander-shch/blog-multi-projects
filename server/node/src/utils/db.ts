// Apply all fields from ghost to entity
// Example ApplyEntityFields(new User(), {name: 'alex', email: 'alex@test.com'}) => User{name: alex, email: alext@test.com}
export function ApplyEntityFields<E, A = object>(entity: E, entityObj: A): E {
  const fieldApplyObj = Object.entries(entityObj);

  fieldApplyObj.forEach(([key, value]) => {
    entity[key] = value;
  });

  return entity;
}
