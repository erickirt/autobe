/**
 * Configuration properties for TypeScript compilation and validation
 * operations.
 *
 * This interface defines the input parameters required for compiling TypeScript
 * code generated by the Test and Realize agents, ensuring integration with the
 * broader application ecosystem including NestJS frameworks, Prisma client
 * APIs, and external dependencies. The properties specify all necessary
 * components for comprehensive compilation validation and quality assurance.
 *
 * The compilation process validates framework integration, type system
 * integrity, dependency resolution, and build compatibility while providing
 * detailed feedback for AI self-correction when errors occur during the
 * iterative development process.
 *
 * @author Samchon
 */
export interface IAutoBeTypeScriptCompileProps {
  /**
   * TypeScript source files to compile as key-value pairs.
   *
   * Contains the generated TypeScript files including implementation code, test
   * scenarios, service classes, and supporting utilities. Each key represents
   * the file path and each value contains the actual TypeScript source code
   * that needs compilation validation.
   *
   * These files are typically generated by the Test and Realize agents and
   * require validation to ensure they integrate correctly with the NestJS
   * application framework, maintain type safety, and follow established coding
   * standards throughout the vibe coding pipeline.
   */
  files: Record<string, string>;

  /**
   * Generated Prisma schema files for database integration context.
   *
   * Optional Prisma schema files that provide database integration context for
   * TypeScript compilation. When provided, these schemas enable the compiler to
   * validate that TypeScript code correctly integrates with the generated
   * Prisma client APIs and maintains proper type alignment between database
   * models and application code.
   *
   * The Prisma schemas ensure that database operations in the implementation
   * code are type-safe and compatible with the established data model,
   * preventing runtime errors related to database access and manipulation.
   */
  prisma?: Record<string, string>;

  /**
   * Package name for the generated SDK library.
   *
   * Specifies the package name used for the generated client SDK library that
   * enables type-safe API consumption. This package name is used in import
   * statements, dependency resolution, and package management throughout the
   * generated TypeScript code.
   *
   * The package name should follow standard npm naming conventions and reflect
   * the organization and project structure. It enables proper module resolution
   * and integration within the broader application ecosystem.
   *
   * @default "@ORGANIZATION/PROJECT-api"
   */
  package?: string;
}
