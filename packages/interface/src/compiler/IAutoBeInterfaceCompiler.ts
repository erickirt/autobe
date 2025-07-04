import { OpenApi } from "@samchon/openapi";

import { AutoBeOpenApi } from "../openapi";

/**
 * Interface for the custom Interface compiler that handles API specification
 * and NestJS application generation.
 *
 * This compiler transforms validated {@link AutoBeOpenApi.IDocument} AST
 * structures into comprehensive NestJS projects through a sophisticated
 * multi-stage transformation pipeline. The Interface compiler bridges the gap
 * between database design and application implementation, ensuring perfect
 * alignment with business requirements and database schemas.
 *
 * The compiler operates through a two-stage transformation process: first
 * converting the specialized AutoBE AST format to standard OpenAPI
 * specification, then generating complete NestJS applications with
 * revolutionary enhancements optimized for both AI consumption and human
 * development workflows.
 *
 * @author Samchon
 */
export interface IAutoBeInterfaceCompiler {
  /**
   * Compiles AutoBE OpenAPI AST document into complete NestJS application
   * files.
   *
   * Performs the complete transformation pipeline from validated
   * {@link AutoBeOpenApi.IDocument} AST structures to production-ready NestJS
   * project files. This includes generating controllers, DTOs, client SDKs,
   * test scaffolds, and all supporting infrastructure code with comprehensive
   * documentation and type safety assurance.
   *
   * The compilation process includes revolutionary enhancements such as
   * keyworded parameter optimization for AI consumption, comprehensive JSDoc
   * documentation derived from AST descriptions, intelligent test scaffolds,
   * and end-to-end type safety throughout the entire application stack.
   *
   * @param document Validated AutoBE OpenAPI AST document containing complete
   *   API specification
   * @returns Promise resolving to key-value pairs mapping file paths to
   *   generated NestJS project contents ready for deployment
   */
  compile(document: AutoBeOpenApi.IDocument): Promise<Record<string, string>>;

  /**
   * Transforms AutoBE OpenAPI AST document to standard OpenAPI specification.
   *
   * Converts the specialized {@link AutoBeOpenApi.IDocument} AST format into the
   * standard {@link OpenApi.IDocument} format that conforms to the official
   * OpenAPI specification. This transformation expands simplified type
   * references into complete OpenAPI schema definitions while preserving all
   * semantic meaning and business context.
   *
   * The resulting OpenAPI document undergoes comprehensive validation against
   * OpenAPI 3.1 specification standards, ensuring complete industry compliance
   * and compatibility with the broader OpenAPI tooling ecosystem.
   *
   * @param document AutoBE OpenAPI AST document to transform
   * @returns Promise resolving to standard OpenAPI document with full
   *   specification compliance
   */
  transform(document: AutoBeOpenApi.IDocument): Promise<OpenApi.IDocument>;

  /**
   * Inverts standard OpenAPI document back to AutoBE OpenAPI AST format.
   *
   * Converts a standard {@link OpenApi.IDocument} back into the specialized
   * {@link AutoBeOpenApi.IDocument} AST format used by the vibe coding pipeline.
   * This inverse transformation enables integration with existing OpenAPI
   * specifications or importing externally created API designs into the AutoBE
   * development workflow.
   *
   * The inversion process analyzes the OpenAPI structure and reconstructs the
   * corresponding AST representation while maintaining compatibility with the
   * AutoBE compilation and validation systems. This enables seamless
   * bidirectional conversion between AutoBE's optimized format and
   * industry-standard specifications.
   *
   * @param document Standard OpenAPI document to convert
   * @returns Promise resolving to AutoBE OpenAPI AST document for vibe coding
   *   pipeline integration
   */
  invert(document: OpenApi.IDocument): Promise<AutoBeOpenApi.IDocument>;
}
