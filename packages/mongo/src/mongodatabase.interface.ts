// database.interface.ts
export interface DbConfig {
  entities?: any[]; // For MongoDB, this might be Mongoose schemas or models
  schemas?: any[]; // You can define schemas for feature modules
}
