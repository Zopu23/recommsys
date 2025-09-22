export type Modality = 'text' | 'vision' | 'audio' | 'multimodal';

export interface Citation {
	url?: string;
	sourceId?: string;
	title?: string;
	quote?: string;
}

export interface ModelCard {
	name: string;
	provider: string;
	family?: string;
	license?: string;
	modality: Modality[];
	contextTokens?: number;
	priceInPerMTok?: number; // USD per 1M input tokens
	priceOutPerMTok?: number; // USD per 1M output tokens
	speedTokPerSec?: number;
	latencyMs?: number;
	selfHostable?: boolean;
	tags?: string[];
	sourceRefs?: Citation[];
}

export interface Constraints {
	budgetUSD?: number;
	latencyMs?: number;
	privacy?: 'api' | 'self_host';
	languages?: string[];
	contextTokensNeeded?: number;
	modalities?: Modality[];
}

export interface TaskProfile {
	id: string;
	name: string;
	description?: string;
	capabilityWeights: Record<string, number>;
	costSensitivity?: number; // 0..1
	latencySensitivity?: number; // 0..1
	privacyPreference?: 'api' | 'self_host' | 'either';
}

export interface ScoreBreakdown {
	total: number; // 0..1
	factors: Record<string, number>; // same scale
}

export interface RecommendationItem {
	model: ModelCard;
	score: ScoreBreakdown;
	priceEstimateUSD?: number;
	latencyEstimateMs?: number;
	fitNotes?: string[];
	citations: Citation[];
}

export interface RecommendRequest {
	task: string;
	constraints?: Constraints;
	mustInclude?: string[];
	mustExclude?: string[];
}

export interface RecommendResponse {
	items: RecommendationItem[];
	rationaleMd?: string;
	citations?: Citation[];
}

