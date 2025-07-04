import { tags } from "typia";

import { AutoBeOpenApi } from "../openapi/AutoBeOpenApi";
import { AutoBeAgentHistoryBase } from "./AutoBeHistoryBase";

/**
 * History record generated when the Interface agent completes RESTful API
 * design based on the previous requirements analysis report and database
 * design.
 *
 * The Interface agent constructs data of type {@link AutoBeOpenApi.IDocument}
 * through AI function calling, validates it, and stores it in the document
 * property. This is then converted to a formal OpenAPI document, and NestJS API
 * controllers, DTOs, and e2e test code are generated through the sophisticated
 * multi-stage transformation pipeline.
 *
 * The Interface agent operates on the same vibe coding principles as other
 * agents, ensuring that API designs are syntactically perfect and semantically
 * aligned with business requirements before any code generation occurs.
 *
 * @author Samchon
 */
export interface AutoBeInterfaceHistory
  extends AutoBeAgentHistoryBase<"interface"> {
  /**
   * The constructed OpenAPI document containing the complete API specification.
   *
   * Contains the validated {@link AutoBeOpenApi.IDocument} AST structure that
   * defines all API endpoints, operations, schemas, and business logic. This
   * document serves as the source of truth for API generation and ensures
   * perfect alignment between database schemas and API interfaces.
   *
   * The document includes comprehensive business logic integration, type safety
   * bridges with Prisma schemas, and security pattern validation to ensure
   * enterprise-grade API specifications.
   */
  document: AutoBeOpenApi.IDocument;

  /**
   * Generated NestJS project files as key-value pairs.
   *
   * Contains the complete set of generated files including NestJS controllers,
   * DTOs, client SDKs, and comprehensive testing frameworks. Each key
   * represents the file path and each value contains the actual file content.
   *
   * The generated code includes revolutionary enhancements such as keyworded
   * parameter optimization for AI consumption, comprehensive JSDoc
   * documentation, intelligent test scaffolds, and end-to-end type safety
   * assurance throughout the entire application stack.
   */
  files: Record<string, string>;

  /**
   * Reason why the Interface agent was activated through function calling.
   *
   * Explains the specific circumstances that triggered the AI chatbot to invoke
   * the Interface agent via function calling. This could include reasons such
   * as completing initial API design after database schema creation, updating
   * API specifications due to requirement changes, or regenerating interfaces
   * to reflect modified data models.
   */
  reason: string;

  /**
   * Iteration number of the requirements analysis report this API design was
   * performed for.
   *
   * Indicates which version of the requirements analysis this API design
   * reflects. If this value is lower than {@link AutoBeAnalyzeHistory.step}, it
   * means the API design has not yet been updated to reflect the latest
   * requirements and may need to be regenerated.
   *
   * A value of 0 indicates the initial API design, while higher values
   * represent subsequent revisions based on updated requirements or database
   * schema changes.
   */
  step: number;

  /**
   * ISO 8601 timestamp indicating when the API design process was completed.
   *
   * Marks the exact moment when the Interface agent finished the complete
   * transformation pipeline from AST construction through OpenAPI validation to
   * NestJS code generation. This timestamp is crucial for tracking the
   * development timeline and determining the currency of the API design
   * relative to other development artifacts.
   */
  completed_at: string & tags.Format<"date-time">;
}
